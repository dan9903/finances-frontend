export interface ICategory {
  id: string;
  name: string;
  description: string;
}

export const categories: ICategory[] = [
  {
    id: "e4b8e772-7805-4f62-a667-a9f98e0bbe5f",
    name: "Water",
    description: "Water bill every month"
  },
  {
    id: "d7c1c592-ace2-4613-8b79-f5d8306adb70",
    name: "Restaurant",
    description: "All going out food"
  },
  {
    id: "442cbaca-ee8b-492d-a0e0-4c89c9c6f7e3",
    name: "Goceries",
    description: "Goceries on supermarket"
  },
  {
    id: "50a62291-b15f-4aa3-b1ff-31e9f64aace1",
    name: "Electricity",
    description: "Electricity Bill"
  },
  {
    id: "23ue3-398dusa-ki0dsa",
    name: "Default",
    description: "Default Category"
  }
]
