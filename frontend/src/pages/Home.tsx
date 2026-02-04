import { useState } from "react";
import { Search, MapPin, Home as HomeIcon, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { mockProperties } from "@/data/mockProperties";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/properties?location=${searchLocation}&type=${propertyType}`);
  };

  const featuredProperties = mockProperties.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Find Your Perfect Space
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Discover rooms, apartments, and PG accommodations that feel like home
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-xl p-4 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Enter location..."
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="md:w-[180px] h-12">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="room">Room</SelectItem>
                    <SelectItem value="pg">PG</SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  onClick={handleSearch}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 h-12 px-8"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="flex items-center justify-center mb-3">
                <HomeIcon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-2">500+</h3>
              <p className="text-muted-foreground">Properties Listed</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center justify-center mb-3">
                <Building2 className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-2">50+</h3>
              <p className="text-muted-foreground">Locations Covered</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center justify-center mb-3">
                <Search className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-2">1000+</h3>
              <p className="text-muted-foreground">Happy Tenants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-muted-foreground text-lg">
              Handpicked accommodations just for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property, index) => (
              <div 
                key={property.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate("/properties")}
              className="px-8"
            >
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Got a room or apartment to rent?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            List your room, apartment, or PG and connect with thousands of students and professionals looking for affordable accommodations
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/post-property")}
            className="px-8"
          >
            Post Your Property
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
