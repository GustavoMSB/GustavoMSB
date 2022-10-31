import { Container } from "./styles";

interface TechProps {
    name?: string;
    icon: React.ReactNode;
    background?: boolean;
}

const IconComp: React.FC<TechProps> = ({icon}) => {
    return <div>{icon}</div>;
  };

export function Tech({name, icon, background = false}: TechProps) {
    return (
        <Container>
            <h3>{name}</h3>
            <div className={background ? "bg-tech" : ""}>
                <IconComp icon={icon}/>
            </div>
        </Container>
    )
}