import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = "3h";

export interface JWTPayload {
  username: string;
  iat?: number;
  exp?: number;
}

export function signToken(username: string): string {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET not configured in environment variables.");
  }
  return jwt.sign({ username }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}


export function verifyToken(token: string): JWTPayload {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET not configured in environment variables.");
  }
  return jwt.verify(token, JWT_SECRET) as JWTPayload;
}


export function extractTokenFromRequest(request: Request): string | null {
  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.substring(7);
  }

  const cookieHeader = request.headers.get("cookie");
  if (cookieHeader) {
    const cookies = Object.fromEntries(
      cookieHeader.split("; ").map((c) => {
        const [key, ...val] = c.split("=");
        return [key, val.join("=")];
      })
    );
    if (cookies["token"]) return cookies["token"];
  }

  return null;
}