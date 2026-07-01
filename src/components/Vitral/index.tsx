import { Container, Logo, Panel, VitralContainer } from "./styles";
import logomarca from '../../assets/logomarca.png'
import lamborghini from '../../assets/lamborghini.png'
import brake from '../../assets/brake.png'
import shockAbsorber from '../../assets/shock-absorber.png'
import rpm from '../../assets/rpm.png'
import blackSedan from '../../assets/black-sedan.png'
import turbo from '../../assets/turbo.png'
import classicMuscleCar from '../../assets/classic-muscle-car.png'
import neonGarage from '../../assets/neon-garage.png'
import vitral from '../../assets/vitral.png'

export function Vitral() {
    return (
        <Container>
            <VitralContainer src={vitral} alt="" />

            <Panel className="lamborghini" src={lamborghini} alt="" />
            <Panel className="brake" src={brake} alt="" />
            <Panel
                className="shock-absorber"
                src={shockAbsorber}
                alt=""
            />
            <Panel className="rpm" src={rpm} alt="" />
            <Panel className="black-sedan" src={blackSedan} alt="" />
            <Panel className="turbo" src={turbo} alt="" />
            <Panel
                className="classic-muscle-car"
                src={classicMuscleCar}
                alt=""
            />
            <Panel className="neon-garage" src={neonGarage} alt="" />

            <Logo
                className="logo"
                src={logomarca}
                alt="Torque House"
            />
        </Container>
    );
}