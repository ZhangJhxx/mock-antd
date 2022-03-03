import '@testing-library/jest-dom/extend-expect'
import axios from "axios"
import { render, RenderResult, fireEvent, wait, createEvent } from '@testing-library/react'

import {Upload,UploadProps} from "./upload"

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const testProps:UploadProps = {
  
}