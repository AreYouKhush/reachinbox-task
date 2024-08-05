import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { parseCookies } from "nookies"; // Import parseCookies from nookies

export interface IEmail {
  id: number;
  fromName: string;
  fromEmail: string;
  toName: string;
  toEmail: string;
  cc: string[];
  bcc: string[];
  threadId: number;
  messageId: string;
  inReplyTo: string;
  references: string;
  subject: string;
  body: string;
  isRead: boolean;
  folder: string;
  uid: number;
  sentAt: string;
  archivedAt: string | null;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

interface EmailState {
  emails: IEmail[];
}

const initialState: EmailState = {
  emails: [],
};

export const fetchEmails = createAsyncThunk(
  "email/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const cookies = parseCookies();
      const token = cookies.token;

      if (!token) {
        throw new Error("No token found in cookies");
      }

      console.log("Token:", token);

      const { data } = await axios.get(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Fetched data:", data);

      return data.data;
    } catch (error: any) {
      console.error("Error fetching emails:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    addEmails: (state, action: PayloadAction<IEmail[]>) => {
      state.emails.push(...action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchEmails.fulfilled,
      (state, action: PayloadAction<IEmail[]>) => {
        state.emails = action.payload;
      }
    );
    builder.addCase(fetchEmails.rejected, (state, action) => {
      console.error("Failed to fetch emails:", action.payload);
    });
  },
});

export const { addEmails } = emailSlice.actions;
export default emailSlice.reducer;
