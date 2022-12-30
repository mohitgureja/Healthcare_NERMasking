# NERMask

Application DEMO Link: https://nerm.netlify.app/
Curretnly this is a demo working, in order to access complete application. 
The following configuration needs to be changes in src/constants.ts
`export const IS_DEMO_MODE = true;`

## Installiation

- All the dependencies need to installed using `npm install`
- Start the application using the command: `npm start`
- In order to build the application use the command: `npm run build`

The frontend of the NERM application, has a single page view.

#### Performing all the functionalites of NERM 
- Masking the Input data
- Masking the INput files

### Masking Text
- The user needs to enter the masking input in the textbox in case of masking text data.
- Then click on the Mask Button. 
- The data is send to the backend and the NERM Model masks the input data.
- The output is then visible to the user, as the masked data

### Making Files
- The user needs to upload files which needs to be masked. It could be a single file or multiple.
- Then click on the Mask Files Button.
- The files are then send to the backend and the NERM Model masks the input files.
- The output is then downloaded as a zip file.
- The zip files contain the masked output.
