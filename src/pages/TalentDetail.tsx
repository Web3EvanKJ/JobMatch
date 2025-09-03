import { useParams } from "react-router";
import { talents } from "../data/talents";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InstagramIcon, Linkedin, Twitter } from "lucide-react";

export default function TalentDetail() {
  const { id } = useParams();
  const talent = talents.find((t) => t.id === id);

  if (!talent) {
    return <p className="p-6">Talent not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center">
            <img
              src={talent.url}
              alt={talent.name}
              className="w-16 h-16 rounded-full mr-4 object-cover"
            />
            <div className="text-3xl font-bold">{talent.name}</div>
          </CardTitle>
          <p className="text-gray-600">{talent.headline}</p>
          <p className="text-sm text-gray-500">{talent.activeStatus}</p>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-700">{talent.bio}</p>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {talent.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Experience</h3>
            <ul className="list-disc list-inside text-gray-700">
              {talent.experience.map((exp, idx) => (
                <li key={idx}>
                  {exp.period} –{" "}
                  <span className="font-semibold">{exp.title}</span> at{" "}
                  {exp.company}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Preferences</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Accepts Crypto:{" "}
                {talent.preferences.acceptsCrypto ? "Yes" : "No"}
              </li>
              <li>
                Accepts Fiat: {talent.preferences.acceptsFiat ? "Yes" : "No"}
              </li>
              <li>
                Open to Relocation:{" "}
                {talent.preferences.openToRelocation ? "Yes" : "No"}
              </li>
              <li>
                Full-time: {talent.preferences.openToFulltime ? "Yes" : "No"}
              </li>
              <li>
                Part-time: {talent.preferences.openToParttime ? "Yes" : "No"}
              </li>
              <li>Remote: {talent.preferences.remote ? "Yes" : "No"}</li>
            </ul>
          </div>
          {talent.funFact && (
            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
              {talent.funFact}
            </blockquote>
          )}

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Connect With Me</h3>
            <div className="flex gap-4">
              <Twitter />
              <InstagramIcon />
              <Linkedin />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
