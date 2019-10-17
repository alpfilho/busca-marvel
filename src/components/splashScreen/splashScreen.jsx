import React, { useEffect, useState } from "react";

/**
 * Logos
 */
import logoObjective from "img/logo-objective.svg";
import logoMarvel from "img/marvel-logo.svg";

/**
 * Styles
 */
import {
  SplashScreenContainer,
  Background,
  Anchor,
  LogoContainer,
  CreditsContainer,
  Title,
  Logo
} from "./splashScreen.style";

/**
 * Componentes
 */
import { ContentContainer } from "components/contentContainer";

export const SplashScreen = ({ duration: durationProp, onAnimationEnd }) => {
  const durations = {
    transition: durationProp * 0.25,
    visible: durationProp * 0.5
  };

  const [state, setState] = useState("hidden");
  const [isMLogoLoaded, setIsMLogoLoaded] = useState(false);
  const [isObjLogoLoaded, setIsObjLogoLoaded] = useState(false);

  const onMarvelLogoLoaded = () => {
    setIsMLogoLoaded(true);
  };
  const onObjectiveLogoLoaded = () => {
    setIsObjLogoLoaded(true);
  };

  useEffect(() => {
    if (isMLogoLoaded && isObjLogoLoaded && state === "hidden") {
      const timeouts = [];

      /*
       Aguardo 500 ms para dar tempo de carregar a fonte, mas o certo é 
      usar um listener de fontes
      */
      setTimeout(() => {
        setState("visible");

        setTimeout(() => {
          setState("exit");

          setTimeout(() => {
            onAnimationEnd();
          }, durations.transition);
        }, durations.transition + durations.visible);
      }, 500);
    }
  }, [
    durations.transition,
    durations.visible,
    isMLogoLoaded,
    isObjLogoLoaded,
    state,
    setState,
    onAnimationEnd
  ]);

  return (
    <SplashScreenContainer>
      <Anchor>
        <ContentContainer>
          <LogoContainer>
            {/* 
              Título
            */}
            <Title
              initial={false}
              animate={state}
              transition={{
                type: "tween",
                duration: durations.transition / 1000
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: "-33%",
                  scale: 1.1
                },
                exit: {
                  opacity: 0,
                  y: "-33%"
                },
                visible: {
                  opacity: 1,
                  y: "0%",
                  scale: 1
                }
              }}
            >
              Busca de Personagens
            </Title>

            {/* 
              Logo Marvel
            */}
            <Logo
              initial={false}
              animate={state}
              transition={{
                type: "tween",
                duration: durations.transition / 1000
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: "16%",
                  scale: 1.1
                },
                exit: {
                  opacity: 0,
                  y: "-16%"
                },
                visible: {
                  opacity: 1,
                  y: "0%",
                  scale: 1
                }
              }}
              src={logoMarvel}
              alt="Marvel"
              onLoad={() => {
                onMarvelLogoLoaded();
              }}
            />
          </LogoContainer>
          <CreditsContainer>
            <Title
              initial={false}
              animate={state}
              transition={{
                type: "tween",
                duration: durations.transition / 1000
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: "20%"
                },
                exit: {
                  opacity: 0,
                  y: "-20%"
                },
                visible: {
                  opacity: 1,
                  y: "0%"
                }
              }}
            >
              Powered By
            </Title>
            <Logo
              initial={false}
              animate={state}
              transition={{
                type: "tween",
                duration: durations.transition / 1000
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: "20%"
                },
                exit: {
                  opacity: 0,
                  y: "-20%"
                },
                visible: {
                  opacity: 1,
                  y: "0%"
                }
              }}
              src={logoObjective}
              onLoad={() => {
                onObjectiveLogoLoaded();
              }}
            />
          </CreditsContainer>
        </ContentContainer>
        <Background />
      </Anchor>
    </SplashScreenContainer>
  );
};
