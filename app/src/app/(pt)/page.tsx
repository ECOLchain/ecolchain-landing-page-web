import LandingPage from '../../components/LandingPage';
import { pt } from '../../content/pt';
import { stepsPt } from '../../content/steps.pt';

export default function Page() {
  return <LandingPage t={pt} steps={stepsPt} />;
}
