import xhr from "./xhr";
import { AxiosRequestConfig } from "./types";

export default function axios(config: AxiosRequestConfig): void {
  xhr(config)
}
