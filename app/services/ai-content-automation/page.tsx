import { getListPage } from "@/lib/getlist"; // Ensure this is server-side
import Services from "@/components/service"; // Ensure this component exists

const AIContentAutomation = async () => {
  try {
    const pageData = await getListPage("components/services.md"); // Ensure the correct path
    const { frontmatter } = pageData;
    const services = frontmatter?.services || []; // Ensure it's always an array

    return <Services services={services} />;
  } catch (error) {
    console.error("Error loading AI Content Automation services:", error);
    return <div>Error loading services. Please try again later.</div>;
  }
};

export default AIContentAutomation;
