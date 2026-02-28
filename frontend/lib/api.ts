const API = process.env.NEXT_PUBLIC_API_URL;

export const registerUser = async (data: any) => {
  const res = await fetch(`${API}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const loginUser = async (data: any) => {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const createComplaint = async (data: any, token: string) => {
  const res = await fetch(`${API}/complaints`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getMyComplaints = async (token: string) => {
  const res = await fetch(`${API}/complaints/my`, {
    headers: { Authorization: token },
  });
  return res.json();
};