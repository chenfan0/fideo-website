"use client";
import { useTranslations, useLocale } from "next-intl";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Snippet } from "@nextui-org/snippet";
import { Link } from "@nextui-org/link";

export default function Faq() {
  const t = useTranslations("faq");
  const locale = useLocale();

  return (
    <section
      id="faq"
      className="mt-24 md:mt-32 p-4 md:p-16 text-center max-w-[1140px] m-auto"
    >
      <h2 className="font-display text-3xl font-semibold md:text-5xl text-nowrap">
        {t("title")}
      </h2>
      <Accordion className=" mx-auto mt-8 text-left" variant="light">
        {/* {commonQuestions.map((question, index) => (
          <AccordionItem className="text-[#aeb5bd;]"  key={index} aria-label={question.title} title={question.title}>
            {question.content}  
          </AccordionItem>
        ))} */}
        <AccordionItem
          className="text-[#aeb5bd;]"
          key={t("question1.title")}
          aria-label={t("question1.title")}
          title={t("question1.title")}
        >
          {t("question1.content")}
        </AccordionItem>
        <AccordionItem
          className="text-[#aeb5bd;]"
          key={t("question2.title")}
          aria-label={t("question2.title")}
          title={t("question2.title")}
        >
          {t("question2.content")}
        </AccordionItem>
        <AccordionItem
          className="text-[#aeb5bd;]"
          key={t("question3.title")}
          aria-label={t("question3.title")}
          title={t("question3.title")}
        >
          {t("question3.content")}
          <Snippet>
            sudo xattr -r -d com.apple.quarantine /Applications/Fideo.app
          </Snippet>
        </AccordionItem>
        <AccordionItem
          className="text-[#aeb5bd;]"
          key={t("question4.title")}
          aria-label={t("question4.title")}
          title={t("question4.title")}
        >
          {t("question4.content")}
        </AccordionItem>
        <AccordionItem
          className="text-[#aeb5bd;]"
          key={t("question5.title")}
          aria-label={t("question5.title")}
          title={t("question5.title")}
        >
          {t("question5.content")}
        </AccordionItem>
        <AccordionItem
          className="text-[#aeb5bd;]"
          key={t("question6.title")}
          aria-label={t("question6.title")}
          title={t("question6.title")}
        >
          <Link href={t("question6.content")} target="_blank">
            {t("question6.title")}
          </Link>
        </AccordionItem>
        <AccordionItem
          className="text-[#aeb5bd;]"
          key={t("question7.title")}
          aria-label={t("question7.title")}
          title={t("question7.title")}
        >
          <Link href={t("question7.content")} target="_blank">
            {t("question7.title")}
          </Link>
        </AccordionItem>
        <AccordionItem
          className="text-[#aeb5bd;]"
          key={t("question8.title")}
          aria-label={t("question8.title")}
          title={t("question8.title")}
        >
          {t("question8.content")}
        </AccordionItem>
      </Accordion>
    </section>
  );
}
