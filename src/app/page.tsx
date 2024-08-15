"use client";

import { Button, Col, Row, Typography } from "antd";
import home from "./home.module.scss";
import Image from "next/image";

const { Title, Text } = Typography;

export default function Home() {
  return (
    <div className={home.container}>
      <div className={home.content1}>
        <div className={home.imageTitle}>
          <Image
            className={home.imageTitleI}
            width={400}
            height={133}
            src="/ROXY.svg"
            alt=""
          />
        </div>
        <Title level={3} className={home.description}>
          Powered by Solana
        </Title>
        <Row>
          <Col
            className={home.boxImage}
            xs={24}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Image
              className={home.imageCloud}
              width={320}
              height={120}
              src="/cloud.svg"
              alt=""
            />
            <Image
              className={home.imageCat}
              width={380}
              height={250}
              src="/cat.svg"
              alt=""
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Title className={home.titleSolana}>
                  Solana’s most adorable cat
                </Title>
              </Col>
            </Row>
            <Row>
              <Col
                className={home.boxBtnBatch1}
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
              >
                <Button
                  type="primary"
                  shape="default"
                  size="large"
                  className={home.btnBatch1}
                >
                  <Image width={30} height={30} src="/cat_r.svg" alt="" />
                  &nbsp;&nbsp;{" "}
                  <span className={home.textBtnBatch1}>
                    CA: 0xF2844304D85037DGJ394805TR129DF
                  </span>{" "}
                  &nbsp;
                  <Image width={20} height={20} src="/copy.svg" alt="" />
                </Button>
              </Col>
            </Row>
            <Row className={home.boxRowBtnBatch2}>
              <Col
                className={home.boxColBtnBatch2}
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
              >
                <Button
                  type="primary"
                  shape="default"
                  size="large"
                  className={home.btnBatch2}
                >
                  <Image width={30} height={30} src="/thuoc.svg" alt="" />
                  &nbsp; BUY $ROXY
                </Button>
              </Col>
              <Col
                className={home.groupBtnBatch3}
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
              >
                <Button
                  type="primary"
                  shape="default"
                  size="large"
                  icon={<Image width={50} height={50} src="/x.svg" alt="" />}
                  className={home.btnBatch3}
                />
                <Button
                  type="primary"
                  shape="default"
                  size="large"
                  icon={
                    <Image width={50} height={50} src="/telegram.svg" alt="" />
                  }
                  className={home.btnBatch3}
                />
                <Button
                  type="primary"
                  shape="default"
                  size="large"
                  icon={
                    <Image width={50} height={50} src="/eagle.svg" alt="" />
                  }
                  className={home.btnBatch3}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div className={home.content2}>
        <Row className={home.boxIntroduction}>
          <Col xs={24}>
            <div className={home.boxTextRepeat}>
              {new Array(20).fill(0).map((i, idx) => (
                <span key={idx} className={home.boxRepeat}>
                  <span className={home.textRepeat}>$ROXY</span>
                  <Image width={20} height={20} src="/cdog.svg" alt="" />
                </span>
              ))}
            </div>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
          >
            <Image
              className={home.imageCat2}
              src="/cat1.svg"
              width={262}
              height={280}
              alt=""
            />
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
          >
            <div className={home.boxIntroduction}>
              <Image
                className={home.chuong1}
                width={15}
                height={15}
                src="/chuong1.svg"
                alt=""
              />
              <Image
                className={home.chuong2}
                width={35}
                height={35}
                src="/chuong2.svg"
                alt=""
              />
              <Title level={4} className={home.textIntroduction}>
                Meow, chill, and stretch with glee,
                <br /> Roxy{`'`}s the queen, wild and free.
                <br /> Crypto world{`'`}s her comfy lap,
                <br /> Watch her reign, with nary a mishap.
              </Title>
              <Image
                className={home.chuong3}
                width={45}
                height={45}
                src="/chuong3.svg"
                alt=""
              />
              <Image
                className={home.chuong4}
                width={35}
                height={35}
                src="/chuong4.svg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className={home.content3}>
        <Row className={home.cartTitleHead}>
          <Image width={350} height={150} src="/TOKENOMICS.svg" alt="" />
        </Row>
        <Row>
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
          >
            <Button
              type="primary"
              shape="default"
              size="large"
              className={home.btnBatch4}
            >
              <Image width={30} height={30} src="/cat_r.svg" alt="" />
              &nbsp;&nbsp;
              <span className={home.textBtnBatch4}>
                CA: 0xF2844304D85037DGJ394805TR129DF
              </span>
              &nbsp;
              <Image width={20} height={20} src="/copy.svg" alt="" />
            </Button>
          </Col>
        </Row>
        <Row className={home.cartContainer}>
          <Col
            className={home.cartContent}
            xs={24}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <div className={home.cartItem}>
              <Image
                className={home.cartImage}
                src="/image_cart1.svg"
                width={150}
                height={100}
                alt=""
              />
              <Text className={home.cartTitle}>Supply</Text>
              <Text className={home.cartText}>1 Billion</Text>
            </div>
          </Col>
          <Col
            className={home.cartContent}
            xs={24}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <div className={home.cartItem}>
              <Image
                className={home.cartImage}
                src="/image_cart2.svg"
                width={150}
                height={100}
                alt=""
              />
              <Text className={home.cartTitle}>LP Burned</Text>
              <Text className={home.cartText}>100%</Text>
            </div>
          </Col>
          <Col
            className={home.cartContent}
            xs={24}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <div className={home.cartItem}>
              <Image
                className={home.cartImage}
                src="/image_cart3.svg"
                width={150}
                height={100}
                alt=""
              />
              <Text className={home.cartTitle}>Team</Text>
              <Text className={home.cartText}>2%</Text>
            </div>
          </Col>
          <Col
            className={home.cartContent}
            xs={24}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <div className={home.cartItem}>
              <Image
                className={home.cartImage}
                src="/image_cart4.svg"
                width={150}
                height={100}
                alt=""
              />
              <Text className={home.cartTitle}>Community rewards</Text>
              <Text className={home.cartText}>5%</Text>
            </div>
          </Col>
        </Row>
      </div>

      <div className={home.content4}>
        <Col xs={24}>
          <div className={home.boxTextRepeat}>
            {new Array(20).fill(0).map((i, idx) => (
              <span className={home.boxRepeat} key={idx}>
                <span className={home.textRepeat}>$ROXY</span>
                <Image width={20} height={20} src="/cdog_b.svg" alt="" />
              </span>
            ))}
          </div>
        </Col>

        <Row className={home.cartTitleHead}>
          <Image width={350} height={150} src="/howtobuy.svg" alt="" />
        </Row>

        <Title level={3} className={home.description}>
          Follow these easy steps to become a $ROXY holder.
        </Title>

        <Row className={home.cartContainer2}>
          <Col
            className={home.cartContent2}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
          >
            <div className={home.cartItem2}>
              <Text className={home.cartTitleFirst2}>Step1</Text>
              <Text className={home.cartTitle2}>CREATE A PHANTOM WALLET</Text>
              <Text className={home.cartText2}>
                Visit phantom.app and follow the simple steps to create a new
                account with the Phantom app or browser extension.
              </Text>
            </div>
          </Col>
          <Col
            className={home.cartContent2}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
          >
            <div className={home.cartItem2}>
              <Text className={home.cartTitleFirst2}>Step2</Text>
              <Text className={home.cartTitle2}>Get some $SOL</Text>
              <Text className={home.cartText2}>
                Tap the BUY button in the app to purchase $SOL, or deposit $SOL
                to your Phantom wallet from the crypto exchange of your choice.
              </Text>
            </div>
          </Col>
          <Col
            className={home.cartContent2}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
          >
            <div className={home.cartItem2}>
              <Text className={home.cartTitleFirst2}>Step3</Text>
              <Text className={home.cartTitle2}>
                Swap $SOL -{">"} $ROXY on PumP.fun
              </Text>
              <Text className={home.cartText2}>
                Visit this link and swap your $SOL for $ROXY
              </Text>
            </div>
          </Col>
          <Col
            className={home.cartContent2}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
          >
            <div className={home.cartItem2}>
              <Text className={home.cartTitleFirst2}>Step4</Text>
              <Text className={home.cartTitle2}>Wait for the PUMP</Text>
              <Text className={home.cartText2}>
                HODL tide and join the $ROXY fam
              </Text>
            </div>
          </Col>
        </Row>
      </div>

      <div className={home.content5}>
        <Row className={home.cartTitleHead}>
          <Image width={450} height={150} src="/MORECUTEROXY.svg" alt="" />
        </Row>

        <Row className={home.cartContainer3}>
          <Col
            className={home.cartContent3}
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <Image width={200} height={200} src="/cat_more1.svg" alt="" />
          </Col>
          <Col
            className={home.cartContent3}
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <Image width={200} height={200} src="/cat_more2.svg" alt="" />
          </Col>
          <Col
            className={home.cartContent3}
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={12}
          >
            <Image width={200} height={200} src="/cat_more3.svg" alt="" />
          </Col>
          <Col
            className={home.cartContent3}
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <Image width={200} height={200} src="/cat_more4.svg" alt="" />
          </Col>
          <Col
            className={home.cartContent3}
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <Image width={200} height={200} src="/cat_more4.svg" alt="" />
          </Col>
          <Col
            className={home.cartContent3}
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <Image width={200} height={200} src="/cat_more4.svg" alt="" />
          </Col>
          <Col
            className={home.cartContent3}
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <Image width={200} height={200} src="/cat_more4.svg" alt="" />
          </Col>
          <Col
            className={home.cartContent3}
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <Image width={200} height={200} src="/cat_more4.svg" alt="" />
          </Col>
        </Row>

        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px 0px",
            }}
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
          >
            <Button
              type="primary"
              shape="default"
              size="large"
              className={home.btnBatch1}
            >
              <span className={home.textBtnBatch1}>SEE MORE IN TWITTER/X</span>
            </Button>
          </Col>
        </Row>

        <Row className={home.groupBtnBatch3}>
          <Col>
            <Button
              type="primary"
              shape="default"
              size="large"
              icon={<Image width={50} height={50} src="/x.svg" alt="" />}
              className={home.btnBatch3}
            />
            <Button
              type="primary"
              shape="default"
              size="large"
              icon={<Image width={50} height={45} src="/telegram.svg" alt="" />}
              className={home.btnBatch3}
            />
            <Button
              type="primary"
              shape="default"
              size="large"
              icon={<Image width={50} height={50} src="/eagle.svg" alt="" />}
              className={home.btnBatch3}
            />
          </Col>
        </Row>

        <Row style={{ paddingBottom: 30 }}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <span className={home.textFooter}>
              2024 $ROXY, All right reserved
            </span>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <span className={home.textBoxFooter}>
              <span className={home.textFooter}>Build with solana</span>
              <Image width={20} height={20} src="/solana.svg" alt="" />
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
}
