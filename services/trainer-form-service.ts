import { trainerFormConfig } from "@/lib/trainer-form-config";

export interface TrainerApplication {
  name: string;
  phone: string;
  email: string;
  qualification: string;
  experience: string;
  skills: string[];
  availability: string;
  salary: string;
}

export async function submitTrainerApplication(
  data: TrainerApplication
): Promise<boolean> {
  try {
    const params = new URLSearchParams();

    params.append(trainerFormConfig.entries.name, data.name);
    params.append(trainerFormConfig.entries.phone, data.phone);
    params.append(trainerFormConfig.entries.email, data.email);
    params.append(
      trainerFormConfig.entries.qualification,
      data.qualification
    );
    params.append(
      trainerFormConfig.entries.experience,
      data.experience
    );

    // Multiple skills (Google Forms checkbox field)
    data.skills.forEach((skill) => {
      params.append(trainerFormConfig.entries.skills, skill);
    });

    params.append(
      trainerFormConfig.entries.availability,
      data.availability
    );

    params.append(trainerFormConfig.entries.salary, data.salary);

    const response = await fetch(trainerFormConfig.formUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    return true;
  } catch (error) {
    console.error("Trainer Form Error:", error);
    return false;
  }
}
