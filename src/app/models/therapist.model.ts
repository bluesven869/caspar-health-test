import Facility from './facility.model';
class Therapist {
  _id: string;
  name: string;
  description: string;
  facility: Facility;

  constructor() {
    this.name = ""
    this.description = ""
    this.facility = null
  }
}

export default Therapist;