import LandingPage from '../../../components/LandingPage';
import { en } from '../../../content/en';
import { stepsEn } from '../../../content/steps.en';

export default function Page() {
  return <LandingPage t={en} steps={stepsEn} />;
}
