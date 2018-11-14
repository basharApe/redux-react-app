import styled, {keyframes} from 'styled-components'

const moveInLeft = keyframes`
  0% {
      opacity: 0;
      transform: translateX(-10rem);
  }

  80% {
      transform: translateX(1rem);
  }

  100% {
      opacity: 1;
      transform: translate(0);
  }
`
const moveInRight = keyframes`
  0% {
      opacity: 0;
      transform: translateX(10rem);
  }

  80% {
      transform: translateX(-1rem);
  }

  100% {
      opacity: 1;
      transform: translate(0);
  }
`
const moveInBottom = keyframes`
  0% {
      opacity: 0;
      transform: translateY(3rem);
  }

  100% {
      opacity: 1;
      transform: translate(0);
  }
`

const HomePageWrapper = styled.div`
  background-color: #313131;
  position: absolute;
  left: 0;
  right: 0;
    top: 0;
    bottom: 0;
  .main{
    height: 100vh;
    background-image: linear-gradient(
        to right bottom,
        rgba(255, 164, 2, 0.7),
        rgba(255, 39, 156, 0.7)),
    url(/assets/dox1-lg2.jpg);
    background-size: cover;
    background-position: top;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

    &__logo-box {
        position: absolute;
        top: 4rem;
        left: 4rem;
    }

    &__logo {
        height: 3.5rem;
    }

    &__text-box {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
  }

  .heading-primary {
    color: #fff;
    text-transform: uppercase;

    backface-visibility: hidden;
    margin-bottom: 6rem;

    &--main {
        display: block;
        font-size: 4rem;
        font-weight: 400;
        letter-spacing: 1.5rem;
        animation-name: ${moveInLeft};
        animation-duration: 1s;
        animation-timing-function: ease-out;
    }

    &--sub {
        display: block;
        font-size: 1.2rem;
        font-weight: 700;
        letter-spacing: .75rem;
        animation: ${moveInRight} 1s ease-out;
    }
  }

  .btn {
    &,
    &:link,
    &:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 1rem 3rem;
        display: inline-block;
        border-radius: 10rem;
        transition: all .2s;
        position: relative;
        font-size: 1.2;
        border: none;
        cursor: pointer;
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba($color-black,.2);

        &::after {
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }

    &:active,
    &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 .5rem 1rem rgba($color-black,.2);
    }

    &--white {
        background-color: #fff;
        color: #313131;

        &::after {
            background-color: #fff;
        }
    }

    &::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 10rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
    }

    &--animated {
        animation: ${moveInBottom} .5s ease-out .75s;
        animation-fill-mode: backwards;
    }
}
`

export {HomePageWrapper}

