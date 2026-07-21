import TrainerRegistrationForm from "@/components/trainer-registration-form";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-yellow-400 mb-4">
          Become an ATL Trainer
        </h1>

        <p className="text-center text-gray-300 mb-10">
          Join our team of ATL experts and inspire students across India.
        </p>

        <TrainerRegistrationForm />
      </div>
    </main>
  );
}
