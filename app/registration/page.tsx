import FormSection from "../components/FormSection";
import RegistrationForm from "../components/Forms/RegistrationForm";

export default function RegistrationPage() {
  return (
    <div className="flex flex-col justify-start sm:justify-center items-center min-h-screen p-6 bg-gray-100">
      <FormSection isBack={true}>
        <RegistrationForm />
      </FormSection>
    </div>
  );
}
