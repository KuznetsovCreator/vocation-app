import FormSection from "../components/FormSection";
import ResetForm from "../components/Forms/ResetForm";

export default function ResetPage() {
  return (
    <div className="flex flex-col justify-start sm:justify-center items-center min-h-screen p-6 bg-gray-100">
      <FormSection isBack={true}>
        <ResetForm />
      </FormSection>
    </div>
  );
}
