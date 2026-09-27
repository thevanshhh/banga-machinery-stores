/**
 * Banga Machinery Stores — Master Data Model
 * Ahmedabad, Gujarat, India
 */

export const COMPANY = {
  name: "Banga Machinery Stores",
  tagline: "Bearing supplier & Engineering Works",
  established: 2008,
  yearsInOperation: "18+",
  proprietor: "Management Team & Works Director",
  gst: "24AAACG1092F1ZK",
  phoneDisplay: "+91 79 2562 4834",
  phoneRaw: "+917925624834",
  waNumber: "917925624834",
  email: "contact@bangamachinerystores.in",
  address: "Ghee Kanta Road, Pittalia Bamba, Opposite Municipal School, Pittalia Bamba, Ahmedabad, Gujarat 380001, India",
  addressShort: "Ahmedabad, Gujarat",
  coordinates: "23.0225° N, 72.5714° E",
  businessType: "Manufacturer · Supplier · Industrial Services",
  teamSize: "20+",
  compliance: "ISO 9001:2015 Compliant Industrial Facility",
  heroImage: "assets/img/01.jpg",
  aboutImage: "assets/img/05.jpg"
};

export const CATALOG = [
  {
    "id": "banga-machinery-stores-carbide-cutters",
    "code": "TL-01",
    "name": "Solid Carbide End Mills & Milling Cutters",
    "category": "Cutting Tools",
    "spec": "Micro-grain tungsten carbide cutters with TiAlN/AlCrN coating for high-speed machining of hardened steels.",
    "specsList": [
      {
        "label": "Diameter Range",
        "val": "1 mm to 25 mm (2 / 4 / 6 Flutes)"
      },
      {
        "label": "Coating Type",
        "val": "TiAlN Multi-Layer Nano Coating"
      },
      {
        "label": "Workpiece Hardness",
        "val": "HRC 45 to HRC 65"
      },
      {
        "label": "Shank Standard",
        "val": "DIN 6535 HA / HB Precision Tolerance"
      }
    ],
    "price": "\u20b91,450",
    "priceUnit": "/ piece"
  },
  {
    "id": "banga-machinery-stores-tool-holders",
    "code": "TL-02",
    "name": "Precision CNC Tool Holders & Collet Chucks",
    "category": "Tooling Systems",
    "spec": "BT40, BT50, and HSK high-rigidity balanced tool holders engineered for vibration-free milling spindles.",
    "specsList": [
      {
        "label": "Taper Standard",
        "val": "BT40 / BT50 / HSK-A63"
      },
      {
        "label": "Balancing Grade",
        "val": "G2.5 at 25,000 RPM Dynamic"
      },
      {
        "label": "Runout Accuracy",
        "val": "< 0.003 mm at Collet Mouth"
      },
      {
        "label": "Clamping Range",
        "val": "ER16 to ER40 / Hydraulic Expansion"
      }
    ],
    "price": "\u20b93,800",
    "priceUnit": "/ unit"
  },
  {
    "id": "banga-machinery-stores-hss-drills",
    "code": "TL-03",
    "name": "Heavy Duty Industrial Bearings & Tool Spares",
    "category": "Industrial Spares",
    "spec": "High-load deep groove, angular contact, and taper roller bearings for industrial machine spindles.",
    "specsList": [
      {
        "label": "Bearing Grades",
        "val": "P5 / P4 High Precision ISO Classes"
      },
      {
        "label": "Radial Load Rating",
        "val": "Up to 140 kN Dynamic"
      },
      {
        "label": "Speed Rating",
        "val": "Up to 18,000 RPM Grease / Oil Mist"
      },
      {
        "label": "Seal Type",
        "val": "Non-contact Labyrinth / Double Contact Rubber"
      }
    ],
    "price": "\u20b92,600",
    "priceUnit": "/ set"
  }
];

export function getWhatsAppInquiryUrl(machine, customMessage = "") {
  let text = "";
  if (machine) {
    const priceText = machine.price ? ` (listed at ${machine.price})` : "";
    text = `Hello ${COMPANY.name}, I am interested in the ${machine.name}${priceText}. Please share technical catalog and commercial quotation.`;
  } else if (customMessage) {
    text = customMessage;
  } else {
    text = `Hello ${COMPANY.name}, I would like to request an RFQ quotation for your industrial product range.`;
  }
  return `https://wa.me/${COMPANY.waNumber}?text=${encodeURIComponent(text)}`;
}
