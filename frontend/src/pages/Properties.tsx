import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { mockProperties } from "@/data/mockProperties";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Properties = () => {
  const [searchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);
  const [searchLocation, setSearchLocation] = useState(searchParams.get("location") || "");
  const [propertyType, setPropertyType] = useState(searchParams.get("type") || "all");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [furnishing, setFurnishing] = useState("all");

  useEffect(() => {
    filterProperties();
  }, [searchLocation, propertyType, priceRange, furnishing]);

  const filterProperties = () => {
    let filtered = mockProperties;

    if (searchLocation) {
      filtered = filtered.filter(
        (p) =>
          p.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
          p.city.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    if (propertyType !== "all") {
      filtered = filtered.filter((p) => p.type === propertyType);
    }

    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (furnishing !== "all") {
      filtered = filtered.filter((p) => p.furnishing === furnishing);
    }

    setFilteredProperties(filtered);
  };

  const FilterSection = () => (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium mb-2 block">Property Type</label>
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="room">Room</SelectItem>
            <SelectItem value="pg">PG</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">
          Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
        </label>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={50000}
          step={1000}
          className="mt-2"
        />
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Furnishing</label>
        <Select value={furnishing} onValueChange={setFurnishing}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="furnished">Furnished</SelectItem>
            <SelectItem value="semi-furnished">Semi-Furnished</SelectItem>
            <SelectItem value="unfurnished">Unfurnished</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button onClick={filterProperties} className="w-full">
        Apply Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-heading text-4xl font-bold mb-4">Browse Properties</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by location..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Mobile Filters */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterSection />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block">
            <div className="bg-card p-6 rounded-lg border card-shadow sticky top-24">
              <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                <SlidersHorizontal className="h-5 w-5" />
                Filters
              </h3>
              <FilterSection />
            </div>
          </aside>

          {/* Properties Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 text-muted-foreground">
              Found {filteredProperties.length} properties
            </div>
            
            {filteredProperties.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No properties found matching your criteria
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Properties;
