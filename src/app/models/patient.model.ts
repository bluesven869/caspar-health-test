import Therapist from './therapist.model';

class Patient {
  _id: string;
  name: string;
  description: string;
  therapist: Therapist;

  constructor() {
    this.name = ""
    this.description = ""
    this.therapist = null
  }
}

export default Patient;