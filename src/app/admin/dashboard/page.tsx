"use client";

import { useState } from "react";

import AdminNavbar from "@/components/admin/AdminNavbar";
import OverviewStats from "@/components/admin/OverviewStats";
import MonitoringSection from "@/components/admin/MonitoringSection";
import UserSection from "@/components/admin/UserSection";
import ChallengeSection from "@/components/admin/ChallengeSection";
import ActiveChallengeSection from "@/components/admin/ActiveChallengeSection";

type Challenge = {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: number;
  date: string;
  participants?: number;
  image?: string;
};

export default function AdminDashboardPage() {

  /* STATE CHALLENGE */
  const [challenges, setChallenges] =
    useState<Challenge[]>([]);

  return (
    <div
      id="top"
      className="min-h-screen bg-[#F1F6F6]"
    >

      {/* NAVBAR */}
      <AdminNavbar />

      {/* CONTENT */}
      <div className="p-10">

        {/* HEADLINE */}
        <h1 className="pb-10 text-5xl font-bold font-heading text-[#1F3A37]">
          Dashboard Admin
        </h1>

        {/* OVERVIEW */}
        <div id="overview">
          <OverviewStats />
        </div>

        {/* MONITORING */}
        <div id="monitoring">
          <MonitoringSection />
        </div>

        {/* USER */}
        <div id="users">
          <UserSection />
        </div>

        {/* CHALLENGE */}
        <div id="challenges">

          {/* FORM CHALLENGE */}
          <ChallengeSection
            challenges={challenges}
            setChallenges={setChallenges}
          />

          {/* ACTIVE CHALLENGE */}
          <ActiveChallengeSection
            challenges={challenges}
            setChallenges={setChallenges}
          />

        </div>

      </div>

    </div>
  );
}