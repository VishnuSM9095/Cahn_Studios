"use client";

import { useState, useEffect } from "react";
import { getListPage } from "@/lib/getlist";
import VideoAutomation from "@/components/ai-video-commercials"; 
interface VideoService {
  title: string;
  content: string;
  animation: string;
  button: {
    enable: boolean;
    label: string;
    link: string;
  };
}

const AIVideoCommercialAutomation = () => {
  const [videoServices, setVideoServices] = useState<VideoService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageData = await getListPage("components/video.md"); // Fetch AI Video Commercial Data
        const { frontmatter } = pageData;
        setVideoServices(frontmatter?.video || []);
      } catch (err) {
        console.error("Error loading AI Video Commercial services:", err);
        setError("Error loading services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-white text-lg">Loading AI Video Commercials...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return <VideoAutomation videoServices={videoServices} />; // ✅ Pass correct prop
};

export default AIVideoCommercialAutomation;
