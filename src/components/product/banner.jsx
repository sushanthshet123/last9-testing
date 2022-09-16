/* eslint-disable max-len */
import * as React from "react"
import * as styles from "./product.module.css"
import Button from "../common/button"
import LevitateSvg from "./levitateSvg"
import LevitateMobile from "./levitateMobile"

const PrimaryBanner = () => (
  <section className="bg-white pb-5">
    <div className={`lg:relative max-w-4xl mx-auto`}>
      <div className="hidden lg:block">
        <LevitateSvg />
      </div>
      <div className="lg:absolute text-center lg:mt-10 mt-28 top-0 w-full text-center">
        <div className="flex justify-center">
          <img
            src="/img/products/levitate.svg"
            className="text-center"
            alt="Levitate"
          />
        </div>
        <h1 className="text-6xl manrope-extrabold">Levitate</h1>
        <p className="my-5 text-2xl opacity-50 md:px-3 px-10 manrope-medium">
          Time series database built to manage scale
        </p>
        <Button
          buttonStyle={"text-white bg-black"}
          // eslint-disable-next-line max-len
          href={
            "https://auth.last9.io/login?state=hKFo2SBYQmJfcmJITENia3p0S3RrZmlLbjhfZ3RNcTN3UFpZU6FupWxvZ2luo3RpZNkgSWNYYW4ybWNZVDlqSExVcUdMYk1tTjVJU21LYnhCcEOjY2lk2SBVM0VmM3NvQ0F0WXZnNkd1TkxGUVFGNE1JeVYwNUVOUg&client=U3Ef3soCAtYvg6GuNLFQQF4MIyV05ENR&protocol=oauth2&audience=https%3A%2F%2Fapp.last9.io%2Fapi&redirect_uri=https%3A%2F%2Fapp.last9.io&scope=openid%20profile%20email%20offline_access&response_type=code&response_mode=query&nonce=LkRXblRJUE5zVjRwTmZVTHZIM2IyZGdZc2oyd25sc08xQ2dyYlh5WUdmMg%3D%3D&code_challenge=UOX7NlSbuyvZgXZEqqQrQuGhnwrOl9vI_2g_au2rbIg&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS45LjAifQ%3D%3D"
          }
        />
        <div className={`${styles.bg} md:hidden overflow-hidden`}>
          <div className="flex justify-center">
            <LevitateMobile />
          </div>
          <div className={styles.mobile_banner}></div>
        </div>
      </div>
    </div>
  </section>
)

export default PrimaryBanner
