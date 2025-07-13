export const initializeAnalytics = async (): Promise<void> => {
  try {
    const { inject } = await import("@vercel/analytics");
    inject();
  } catch (error) {
    console.warn("Failed to initialize Vercel Analytics:", error);
  }
};
