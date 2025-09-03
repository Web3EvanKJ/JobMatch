import { useState } from "react";
import { Link } from "react-router";
import { talents } from "../data/talents";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function Talent() {
  const [search, setSearch] = useState("");

  // Filter talents by name, headline, or tags
  const filteredTalents = talents.filter(
    (talent) =>
      talent.name.toLowerCase().includes(search.toLowerCase()) ||
      talent.headline.toLowerCase().includes(search.toLowerCase()) ||
      talent.tags.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">
        Discover Top Talent
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <Input
          type="text"
          placeholder="Search by name, skill, or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md border border-gray-300 rounded-xl shadow-sm"
        />
      </div>

      {/* Talent Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTalents.length > 0 ? (
          filteredTalents.map((talent) => (
            <Link
              to={`/talent/${talent.id}`}
              className="inline-block mt-4 text-blue-600  text-sm font-medium"
            >
              <Card
                key={talent.id}
                className="rounded-2xl hover:shadow-lg transition h-full"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <img
                      src={talent.url}
                      alt={talent.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div className="text-xl font-semibold">{talent.name}</div>
                  </CardTitle>
                  <p className="text-sm text-gray-500">{talent.headline}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm line-clamp-3 mb-3">{talent.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {talent.tags.slice(0, 4).map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">📍 {talent.location}</p>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No talent found. Try another search
          </p>
        )}
      </div>
    </div>
  );
}
