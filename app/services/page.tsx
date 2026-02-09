    
import { ServicesFaqs } from "@/components/Services/ServicesFAQ"
import { ServicesCta } from "@/components/Services/ServicesCTA"
import { WhoWeSupport } from "@/components/Services/WhoWeSupport"
import { ServicesPageHeader } from "@/components/Services/ServicePageHeader"
import ServicesGrid from "@/components/Services/ServicesGrid"

const page = () => {
    return (
        <div>
            <ServicesPageHeader background={{colorClassName: "bg-white"}} textVariant="dark"/>
            <ServicesGrid background={{colorClassName: "bg-white"}} textVariant="dark"/>
            <WhoWeSupport background={{colorClassName: "bg-white"}} textVariant="dark"/>
            <ServicesFaqs background={{colorClassName: "bg-white"}} textVariant="dark"/>
            <ServicesCta background={{colorClassName: "bg-white"}} textVariant="dark"/>
        </div>
    )
}

export default page
