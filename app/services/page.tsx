
import { ServicesFaqs } from "@/components/Services/ServicesFAQ"
import { ServicesCta } from "@/components/Services/ServicesCTA"
import { WhoWeSupport } from "@/components/Services/WhoWeSupport"
import { ServicesPageHeader } from "@/components/Services/ServicePageHeader"
import ServicesGrid from "@/components/Services/ServicesGrid"

const page = () => {
    return (
        <div>
            <ServicesPageHeader background={{ colorValue: "#000000" }}
                textVariant="light" />
            <ServicesGrid background={{ colorValue: "#000000" }}
                textVariant="light" />
            <WhoWeSupport background={{ colorValue: "#000000" }}
                textVariant="light" />
            <ServicesFaqs background={{ colorValue: "#000000" }}
                textVariant="light" />
            <ServicesCta background={{ colorValue: "#000000" }}
                textVariant="light" />
        </div>
    )
}

export default page
