import { Container } from "./styles";

interface TechProps {
    name?: string;
    icon: React.ReactNode;
    background?: boolean;
    color?: string;
}

const IconComp: React.FC<TechProps> = ({icon, color}) => {
    return <div style={{ color }}>{icon}</div>;
  };

export function Tech({name, icon, background = false, color}: TechProps) {
    return (
        <Container $hoverColor={color as string}>
            <h3>{name}</h3>
            <div className={background ? "bg-tech" : ""}>
                <IconComp icon={icon} color={color}/>
            </div>
        </Container>
    )
}