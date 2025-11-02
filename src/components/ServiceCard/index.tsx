import { Card, CardContent, CardHeader, CardTitle } from "../Card";

export interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  animation?: string;
}

export function ServiceCard({
  title,
  description,
  features,
  animation,
}: ServiceCardProps) {
  return (
    <Card animation={animation}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <ul className="text-card-foreground/80 list-inside list-disc space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="hover:text-primary transition-colors duration-200"
            >
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
