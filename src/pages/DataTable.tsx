import { useEffect, useState } from "react";

interface DataTableProps {
  data: string;
}

export default function DataTable({ data }: DataTableProps) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(data);
  }, [data]);

  return <div>{title}</div>;
}
