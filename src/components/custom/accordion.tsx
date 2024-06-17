import { AccordionContent, AccordionItem, AccordionTrigger, Accordion as ShadcnAccordion } from '@/components/ui/accordion'

export default function Accordion({ content, trigger }: {
    content: string, trigger: string,
}) {
    return (
        <ShadcnAccordion
            type="single"
            collapsible
        >
            <AccordionItem value="item-1">
                <AccordionTrigger>{trigger}</AccordionTrigger>
                <AccordionContent>{content}</AccordionContent>
            </AccordionItem>
        </ShadcnAccordion>
    )
}