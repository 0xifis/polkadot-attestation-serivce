"use client";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Dolphin Protocol</span>
          </h1>
          <article className="prose">
            <hr />
            <h2 className="text-center">The problem the Dolphin protocol solves</h2>
            <p className="text-justify">
              Tokenisation of Real World Assets is currently a 0/1 game: an Asset is either tokenized or not tokenised.
              It is also centralised, slow, expensive and vendor-locked.
              <br />
              <br />
              Here is an alternative process (general attestation service for the Polkadot ecosystem) that is
              permissionless each step of the way and allows unprecedented granularity and flexibility. Anyone can start
              from zero, claim that an NFT represents a RWA, and then slowly (or rapidly) convince others of it by
              attaching Attestations to the NFT. The trustworthiness of the attestations is calculated by a
              sophisticated real-time Social Graph using Pagerank and user-specific Priors (eg. Kilt ID, GitCoin
              Passport, Harpie).
              <br />
              <br />
              The marketplace for Attestations allows competitive forces to lower the prices of Attestations, and thus
              allow even people who are poor to gradually tokenize an asset as their means allow. Even better, the whole
              process being permissionless, you can donate to a stranger in need by paying for an attestation they
              requested.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
