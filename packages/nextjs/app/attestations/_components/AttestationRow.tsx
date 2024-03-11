import React from "react";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

interface AttestationRowProps {
  id: string;
}

const AttestationRow = ({ id }: AttestationRowProps) => {
  const { data, isLoading } = useScaffoldContractRead({
    contractName: "AttestationService",
    functionName: "getAttestation",
    args: [BigInt(id)],
  });

  if (isLoading) {
    return (
      <tr>
        <td>Loading...</td>
      </tr>
    );
  }

  if (!data) {
    return (
      <tr>
        <td>No data found</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{data.id.toString()}</td>
      <td>{data.schemaId.toString()}</td>
      <td>{data.data.substring(1, data.data.length - 1)}</td>
      <td>{data.issuer}</td>
      <td>{data.subject}</td>
    </tr>
  );
};

export default AttestationRow;
