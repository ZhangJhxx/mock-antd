// import '@testing-library/jest-dom/extend-expect'
// import axios from "axios"
// import { screen,render, fireEvent,  createEvent } from '@testing-library/react'

// import Upload,{ UploadProps} from "./upload"
// import { ReactChild, ReactFragment, ReactPortal } from 'react';
// import { icon } from '@fortawesome/fontawesome-svg-core';

// jest.mock('axios');

// //<i className="fa" />
// const mockedAxios = axios as jest.Mocked<typeof axios>;
// jest.mock("../icon/icon",()=>{
//   return ({icon, onClick})=><span onClick={onClick}>{icon}</span>;
// })

// const testProps:UploadProps = {
//   action: "fakeurl.com",
//   onSuccess: jest.fn(),
//   onFileChange: jest.fn(),
//   onFileRemove: jest.fn(),
//   dragable:true
// }
// const genUpload = (props:UploadProps) => {
//   return (
//     <Upload {...props} >Click to upload</Upload>
//   )
// }
// let fileInput: HTMLInputElement, uploadArea: HTMLElement;
// const testFile = new File(['xyz'],"test.png",{type:'image/png'});

// describe('test upload component', ()=>{
//   const setup = (props:UploadProps) => render(genUpload(props));
//   it('upload process should works fine',async ()=>{
//     setup(testProps);
//     const {onSuccess, onFileChange, onFileRemove} = testProps;
//     fileInput = screen.getByTestId("hidden-input");
//     uploadArea = screen.getByText("Click to upload");
//     mockedAxios.post.mockResolvedValue({"data":'cool'});
//     expect(uploadArea).toBeInTheDocument();
//     expect(fileInput).not.toBeVisible();
//     fireEvent.change(fileInput,{target:{files:[testFile]}});
//     expect(screen.getByText('spinner')).toBeInTheDocument();
//     await screen.findByText('test.png');
//     expect(screen.getByText('check-circle')).toBeInTheDocument(); 
//     expect(onSuccess).toHaveBeenCalledWith("cool",testFile);  
//     expect(onFileChange).toHaveBeenCalledWith(testFile);  

//     //fileremove
//     const remove = screen.getByText('times');
//     expect(remove).toBeInTheDocument();
//     fireEvent.click(remove);
//     expect(screen.queryByText('test.png')).not.toBeInTheDocument()
//     expect(onFileRemove).toHaveBeenCalledWith(expect.objectContaining({
//       raw:testFile,
//       status:'success'
//     }));

//   })
//   it('drag and drop files should works fine', async () => {
//     setup(testProps);
//     fileInput = screen.getByTestId("hidden-input");
//     uploadArea = screen.getByText("Click to upload");
//     mockedAxios.post.mockResolvedValue({"data":'cool'});
//     fireEvent.dragOver(uploadArea)
//     expect(uploadArea).toHaveClass('is-dragover')
//     fireEvent.dragLeave(uploadArea)
//     expect(uploadArea).not.toHaveClass('is-dragover')
//     const mockDropEvent = createEvent.drop(uploadArea)
//     Object.defineProperty(mockDropEvent, "dataTransfer", {
//       value: {
//         files: [testFile]
//       }
//     })
//     fireEvent(uploadArea, mockDropEvent)
//     await expect(screen.getByText('test.png')).toBeInTheDocument()
//     expect(testProps.onSuccess).toHaveBeenCalledWith('cool', testFile)
//   })
// })
