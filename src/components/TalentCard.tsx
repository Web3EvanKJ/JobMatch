import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Talent } from "../data/talents";

interface TalentCardProps {
  talent: Talent;
}

export default function TalentCard({ talent }: TalentCardProps) {
  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
      <CardHeader>
        <CardTitle className="text-xl">{talent.name}</CardTitle>
        <p className="text-gray-500 text-sm">{talent.headline}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700 mb-2">{talent.location}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {talent.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
          {talent.tags.length > 4 && <Badge>+{talent.tags.length - 4}</Badge>}
        </div>
        <Link to={`/talent/${talent.id}`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            View Profile
          </button>
        </Link>
      </CardContent>
    </Card>
  );
}
