import one from "../../images/pannel1.svg";
import two from "../../images/pannel2.svg";
import three from "../../images/pannel3.svg";
import four from "../../images/pannel4.svg";
export const accordionData = [
  {
    title: "Domestic Companies",
    content: `A U.S. entity formed on or after the effective date of the
        final Regs. must file its initial report within
        14 days of formation with the State.`,
    content2: `A U.S. entity formed before the effective date of the
    final Regs. must file its initial report within
    1 year of the final Reg's effective date.`,
    panel: "panel1",
    icon: one,
  },
  {
    title: "Foreign Companies",
    content: `A non-U.S. entity which first registers in a U.S. State on or after the effective date of the final Regs. must file its initial report within 14 days of State law registration.`,
    content2: `A non-U.S. entity which first registers in a U.S. State before the effective date of the final Regs. must file its initial report within 1 yearof the final Reg.’s effective date.`,
    panel: "panel2",
    icon: two,
  },
  {
    title: "Beneficial Owner",
    content: `An Individual either exercises substantial control or owns or controls at least 25 percent of the ownership interests in a reporting company unless the reporting company is publicly owned or controlled primarily by such individuals, in which case such individuals shall be deemed to have exercised substantial control over the reporting company.`,
    panel: "panel3",
    icon: three,
  },
//   {
//     title: "Company Applicant",
//     content: `A beneficial owner is any individual who directly or indirectly, through any contract, arrangement, understanding, relationship, or otherwise:                       (i) exercises substantial control over the entity or            (ii) owns or controls at least 25% of the ownership interests of the entity.`,
//     panel: "panel4",
//     icon: four,
//   },
];
