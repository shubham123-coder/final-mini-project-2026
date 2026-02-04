import { Property } from "@/data/mockProperties";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, BedDouble, Bath, Maximize } from "lucide-react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'apartment':
        return 'bg-primary/10 text-primary hover:bg-primary/20';
      case 'pg':
        return 'bg-accent/10 text-accent hover:bg-accent/20';
      case 'room':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted';
    }
  };

  return (
    <Link to={`/property/${property.id}`}>
      <Card className="overflow-hidden transition-smooth hover:card-shadow-hover cursor-pointer group">
        <div className="relative h-48 overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-110"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge className={getTypeColor(property.type)}>
              {property.type.toUpperCase()}
            </Badge>
            {property.available && (
              <Badge className="bg-green-500/90 text-white">Available</Badge>
            )}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-1">
            {property.title}
          </h3>
          
          <div className="flex items-center text-muted-foreground text-sm mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{property.location}, {property.city}</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center">
              <BedDouble className="h-4 w-4 mr-1" />
              <span>{property.bedrooms} Bed</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms} Bath</span>
            </div>
            <div className="flex items-center">
              <Maximize className="h-4 w-4 mr-1" />
              <span>{property.area} sqft</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-heading font-bold text-primary">
                ₹{property.price.toLocaleString()}
              </span>
              <span className="text-muted-foreground text-sm">/month</span>
            </div>
            <Badge variant="outline" className="capitalize">
              {property.furnishing}
            </Badge>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PropertyCard;
