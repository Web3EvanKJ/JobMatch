import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const roles = [
  { role: "Legal", mean: "$103,356", min: "$30,000", max: "$250,000" },
  { role: "Solidity", mean: "$101,197", min: "$22,000", max: "$180,000" },
  { role: "Product", mean: "$100,137", min: "$30,000", max: "$180,000" },
  { role: "Sales", mean: "$97,477", min: "$24,000", max: "$180,000" },
  { role: "Finance", mean: "$93,158", min: "$30,000", max: "$152,000" },
  { role: "Developer", mean: "$83,077", min: "$20,000", max: "$150,000" },
  { role: "Marketing", mean: "$76,275", min: "$18,000", max: "$150,000" },
  { role: "Design", mean: "$73,808", min: "$12,000", max: "$140,000" },
  { role: "Community", mean: "$44,928", min: "$9,000", max: "$100,000" },
];

export function SalaryTable() {
  return (
    <Table className="border border-gray-200">
      <TableCaption>Average salary ranges for key Web3 roles.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Role</TableHead>
          <TableHead>Mean Salary</TableHead>
          <TableHead>Min Salary</TableHead>
          <TableHead className="text-right">Max Salary</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {roles.map((role) => (
          <TableRow key={role.role}>
            <TableCell className="font-medium">{role.role}</TableCell>
            <TableCell>{role.mean}</TableCell>
            <TableCell>{role.min}</TableCell>
            <TableCell className="text-right">{role.max}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
