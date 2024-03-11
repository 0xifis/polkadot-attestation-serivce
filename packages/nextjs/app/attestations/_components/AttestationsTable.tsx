import React, { useEffect, useState } from "react";
import AttestationRow from "./AttestationRow";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const AttestationsTable = () => {
  const [totalAttestationCount, setTotalAttestationCount] = useState(0);

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
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Schema ID</th>
          <th>Data</th>
          <th>Issuer</th>
          <th>Subject</th>
        </tr>
      </thead>
      <tbody>
        {isTotalCounterLoading ? (
          <tr className="hover">
            <td colSpan={5}>Loading attestations...</td>
          </tr>
        ) : totalAttestationCount && totalAttestationCount > 0 ? (
          Array.from({ length: totalAttestationCount }, (_, index) => <AttestationRow key={index} id={String(index)} />)
        ) : (
          <tr>
            <td colSpan={5}>No attestations found.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default AttestationsTable;
