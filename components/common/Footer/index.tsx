import { documentation, products, socialMedia } from './Footer.helper';
import ListItem from './ListItem';
import { LinkButton } from 'components/common/Button/LinkButton';

function Footer() {
  return (
    <footer className="relative flex w-full flex-col">
      <div className="w-full bg-neutral-500 flex flex-col items-center">
        <div className="container px-25 py-30 md:p-50 flex flex-col items-center">
          <div className="text-baseForeground text-center text-18 md:text-45 font-semibold">
            Start secure swaps across blockchains
          </div>
          <div className="text-14 md:text-18 font-medium mt-15 md:mt-0 text-center text-neutral-200">
            Swap across 64+ blockchains and 100+ DEX/Bridge Protocols in a
            simple UI
          </div>
          <LinkButton
            className="mt-35 md:mt-[60px] w-[257px]"
            href="https://app.rango.exchange/">
            Open Swap
          </LinkButton>
        </div>
      </div>
      <div className="w-full bg-baseBackground pt-40 md:pt-[100px]">
        <div className="relative w-full bg-footer-mask bg-contain bg-right-bottom bg-no-repeat pb-16 md:bg-[right_1.5rem]">
          <div className="mx-auto flex container  flex-col justify-between px-30 md:flex-row md:px-0">
            <div className="mb-10 text-left md:mb-0 md:max-w-[19.4375rem]">
              <h3 className="mb-3.5 text-left text-16 md:text-22	font-medium text-baseForeground md:text-[1.1rem] md:leading-[1.4rem]">
                About Rango
              </h3>
              <p className="w-full text-12 md:text-16 font-medium leading-[1.5rem] text-neutral-200	">
                Martex is a set of decentralized finance products. Martex Space
                includes cross-platform mobile wallets available for Android and
                iOS, as well as browser extensions. Martex Swap features a hot
                wallet and cross-chain swap capabilities, and Martex Wallet is
                your pocket wallet where you can store your favorite coins
                safely with Martex. Martex SDK and Martex API are associated
                with Martex provider solutions, available to anyone looking to
                build DEX, DAPP, or similar applications based on their
                requirements.
              </p>
            </div>
            <div className="grid grid-cols-2 md:flex md:w-[50%] md:justify-around mt-40 md:mt-0 md:mb-10">
              <div>
                <h3 className="mb-3 text-left text-14 md:text-22 font-medium	text-baseForeground	md:mb-3.5 md:text-[1.1rem] md:leading-[1.4rem]">
                  Products
                </h3>
                <ul className="w-full">
                  {products.map((link, index) => (
                    <ListItem key={index} {...link} />
                  ))}
                </ul>
              </div>
              <div className="mb-10">
                <h3 className="mb-3 text-left text-14 md:text-22 font-medium	text-baseForeground	md:mb-3.5 md:leading-[1.4rem]">
                  Documentation
                </h3>
                <ul className="w-full">
                  {documentation.map((link, index) => (
                    <ListItem key={index} {...link} />
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-left mt-25 md:mt-0 text-14 md:text-22 font-medium	text-baseForeground	md:mb-3.5  md:leading-[1.4rem]">
                Social Media
              </h3>
              <ul className="w-full">
                {socialMedia.map((link, index) => (
                  <ListItem key={index} {...link} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <span className="w-full bg-neutral-500 p-2.5 text-center text-10 md:text-16 text-baseForeground md:text-base md:leading-6">
        Copyright © 2024 Martex Swap & Exchange All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
