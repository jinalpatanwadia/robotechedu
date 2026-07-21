export const trainerFormConfig = {
  formUrl: process.env.TRAINER_FORM_URL!,

  entries: {
    name: process.env.TRAINER_NAME!,
    phone: process.env.TRAINER_PHONE!,
    email: process.env.TRAINER_EMAIL!,
    qualification: process.env.TRAINER_QUALIFICATION!,
    experience: process.env.TRAINER_EXPERIENCE!,
    skills: process.env.TRAINER_SKILLS!,
    availability: process.env.TRAINER_AVAILABILITY!,
    salary: process.env.TRAINER_SALARY!,
  },
};

export function isTrainerFormConfigured() {
  return (
    !!trainerFormConfig.formUrl &&
    Object.values(trainerFormConfig.entries).every(Boolean)
  );
}
