"use client";

import React, { useEffect, useState } from "react";
import AttestationsTable from "./_components/AttestationsTable";
import type { NextPage } from "next";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const AttestationsPage: NextPage = () => {
  const [totalAttestationCount, setTotalAttestationCount] = useState<number | undefined>(undefined);

  // Fetch total number of attestations
  const { data: totalAttestationsData, isLoading: isTotalCounterLoading } = useScaffoldContractRead({
    contractName: "AttestationService",
    functionName: "getTotalAttestations",
    watch: true,
  });

  useEffect(() => {
    if (!isTotalCounterLoading && totalAttestationsData !== undefined) {
      const total = Number(totalAttestationsData);
      setTotalAttestationCount(total);
    }
  }, [totalAttestationsData, isTotalCounterLoading]);

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5">
        <div className="flex flex-col justify-center items-center space-x-2">
          <h1>Attestations</h1>
          <AttestationsTable />
          <p className="text-xs font-light">
            Total Attestations: {totalAttestationCount !== undefined ? totalAttestationCount : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AttestationsPage;
