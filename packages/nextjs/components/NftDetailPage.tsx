"use client";

import React from "react";
import Image from "next/image";
import AttestationsSchemaCard from "./AttestationSchemaCard";
import AttestationsTable from "./AttestationsTable";
import RequestsTable from "./RequestsTable";
import { useQuery } from "@apollo/client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { CardBody, CardContainer, CardItem } from "components/ui/3d-card";
import { GET_RECIPES, processRecipes } from "queries/GET_RECIPES";

function NFTDetailPage({ nft }: { nft: any }) {
  const { loading, error, data } = useQuery(GET_RECIPES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const recipes = processRecipes(data["attestations"]);

  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="md:w-1/3">
        <h1 className="mb-4 text-2xl font-bold text-neutral-600 dark:text-white">{nft.name}</h1>
        <CardContainer className="mb-10">
          <CardBody className="group/card relative h-auto w-auto ">
            <CardItem translateZ="100" className="mt-4 overflow-hidden">
              <Image
                src={nft.imageUrl}
                height="1000"
                width="1000"
                className="max-w-200 rounded-xl object-cover group-hover/card:shadow-xl"
                alt={nft.title || "NFT Image"}
              />
            </CardItem>
          </CardBody>
        </CardContainer>

        <p className="h-60 overflow-x-hidden overflow-y-scroll text-justify text-sm font-light text-neutral-600 dark:text-neutral-500">
          {nft.description}
        </p>
      </div>

      <div className="md:ml-8 md:w-2/3">
        <h2 className="mb-4 text-xl font-bold text-neutral-600 dark:text-white">Recipes</h2>
        <Accordion type="single" collapsible className="w-full py-4  text-white">
          {recipes.map(({ expectedOutcome: recipe, schemaIds = [] }) => (
            <AccordionItem value={recipe} key={recipe} className="my-4 border p-4">
              <AccordionTrigger>
                <b>Outcome: </b>
                {recipe}
              </AccordionTrigger>
              <AccordionContent className="my-6 space-y-4">
                <h3 className="w-full border-b pb-2">Required Attestations:</h3>
                {schemaIds.map((schemaId: string) => (
                  <AttestationsSchemaCard key={schemaId} schemaId={schemaId} />
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <h2 className="my-4 text-xl font-bold text-neutral-600 dark:text-white">Attestations</h2>

        <AttestationsTable recipientFilter={nft.collectionAddress} tokenIdFilter={nft.collectionTokenId} />
        <h2 className="my-4 text-xl font-bold text-neutral-600 dark:text-white">Requests for Attestation</h2>
        <RequestsTable recipientFilter={nft.collectionAddress} tokenIdFilter={nft.collectionTokenId} />
        <p className="text-sm mt-24 word-wrap my-4 text-neutral-600 dark:text-white">
          Contract Address: {nft.collectionAddress} - {nft.collectionTokenId}
        </p>
      </div>
    </div>
  );
}

export default NFTDetailPage;
