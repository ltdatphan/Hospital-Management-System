interface IPatient {
  pat_id: number;
  first_name: string;
  last_name: string;
  gender: string;
  date_of_birth: Date;
  email: string;
  phone: string;
  height: number;
  weight: number;
  blood_type: string;
  emergency_name: string;
  emergency_rel: string;
  emergency_phone: string;
  emergency_email: string;
  insurance_provider: string;
  policy_number: string;
  chronic_conditions: string;
  previous_procedures: string;
  family_history: string;
  lifestyle: string;
}

interface IEmployee {
  emp_id: number;
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  phone: string;
}

interface IDoctor extends IEmployee {
  specialty: string;
}

interface INurse extends IEmployee {
  shift: string;
}

interface IAdmin extends IEmployee {}

interface IAppointment {
  apt_id: number;
  apt_start: Date;
  apt_end: Date;
  status: string;
  doc_id: number;
  pat_id: number;
}

interface IMedicalRecord {
  rec_id: number;
  created_date: Date;
  diagnosis: string;
  treatment: string;
  pat_id: number;
}

interface IInventory {
  inv_id: number;
  item_name: string;
  item_code: string;
  manufacturer: string;
  purchased_date: Date;
  quantity_in_stock: number;
  minimum_stock_level: number;
  category: string;
  location: string;
}

interface IPharmacy {
  pharm_id: number;
  pharm_name: string;
  pharm_address: string;
  pharm_phone: string;
  pharm_email: string;
}
