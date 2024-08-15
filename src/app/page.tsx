"use client";

import { Button, Col, Row, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import home from "./home.module.scss";
import Image from "next/image";

const { Title, Text } = Typography;

export default function Home() {
  return (
    <div className={home.container}>
      <div className={home.content1}>
        <div className={home.imageTitle}>
          <Image width={300} height={133} src="/ROXY.svg" alt="" />
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
              width={426}
              height={188}
              src="/cloud.svg"
              alt=""
            />
            <Image
              className={home.imageCat}
              width={697}
              height={188}
              src="/cat.svg"
              alt=""
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Title level={3}>Solana’s most adorable cat</Title>
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Button
                  type="primary"
                  shape="default"
                  size="large"
                  icon={<DownloadOutlined />}
                  className={home.btnBatch1}
                >
                  CA: 0xF2844304D85037DGJ394805TR129DF
                  <DownloadOutlined />
                </Button>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Button
                  type="primary"
                  shape="default"
                  size="large"
                  icon={<DownloadOutlined />}
                  className={home.btnBatch2}
                >
                  BUY $ROXY
                </Button>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Button
                  type="primary"
                  shape="default"
                  size="large"
                  icon={"X"}
                  className={home.btnBatch3}
                ></Button>
                <Button
                  type="primary"
                  shape="default"
                  size="large"
                  icon={"X"}
                  className={home.btnBatch3}
                ></Button>
                <Button
                  type="primary"
                  shape="default"
                  size="large"
                  icon={"X"}
                  className={home.btnBatch3}
                ></Button>
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
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Image
              className={home.imageCat2}
              src="/cat1.svg"
              width={430}
              height={412}
              alt=""
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Title level={4} className={home.textIntroduction}>
              There are five type of buttons in antd, namely they are: primary
              buttons, default buttons, dashed buttons, text buttons, and link
              buttons.
            </Title>
          </Col>
        </Row>
      </div>

      <div className={home.content3}>
        <Row className={home.cartTitleHead}>
          <Title level={2}>TOKENOMICS</Title>
        </Row>
        <Row>
          <Col
            className={home.boxBtnBatch4}
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
              icon={<DownloadOutlined />}
              className={home.btnBatch4}
            >
              Download DownloadDownload
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
              <Text className={home.cartTitle}>Powered by Solana</Text>
              <Text className={home.cartText}>10%</Text>
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
              <Text className={home.cartTitle}>Powered by Solana</Text>
              <Text className={home.cartText}>10%</Text>
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
              <Text className={home.cartTitle}>Powered by Solana</Text>
              <Text className={home.cartText}>10%</Text>
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
              <Text className={home.cartTitle}>Powered by Solana</Text>
              <Text className={home.cartText}>10%</Text>
            </div>
          </Col>
        </Row>
      </div>

      <div className={home.content4}>
        <Col xs={24}>
          <div className={home.boxTextRepeat}>
            {new Array(20).fill(0).map((i, idx) => (
              <span key={idx}>
                <span className={home.textRepeat}>$ROXY</span>
                <span className={home.textRepeatChild}>o</span>
              </span>
            ))}
          </div>
        </Col>
      </div>
    </div>
  );
}
