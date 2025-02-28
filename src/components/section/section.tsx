import { ReactNode } from "react";
import './section.css';

interface SectionProps {
    children: ReactNode;
    title?: string | undefined;
    id?: string;
    blue?: boolean;
}

export default function Section(props: SectionProps) {

    return(
        <section id={props.id} className="section">
            {props.title && <h3>{props.title}</h3>}
            <div className="content">
                {props.children}
            </div>
        </section>
    );
}