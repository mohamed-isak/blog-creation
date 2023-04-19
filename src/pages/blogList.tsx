import React from "react";
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardDetails,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  DocumentCardType,
  IDocumentCardActivityPerson,
} from "@fluentui/react/lib/DocumentCard";
import { Stack, IStackTokens } from "@fluentui/react/lib/Stack";
import { TestImages } from "@fluentui/example-data";

const stackTokens: IStackTokens = { childrenGap: 20 };

export default function BlogList() {
  const previewProps: IDocumentCardPreviewProps = {
    getOverflowDocumentCountText: (overflowCount: number) =>
      `+${overflowCount} more`,
    previewImages: [
      {
        name: "Revenue stream proposal fiscal year 2016 version02.pptx",
        linkProps: {
          href: "http://bing.com",
          target: "_blank",
        },
        previewImageSrc: "TestImages.documentPreview",
        iconSrc: TestImages.iconPpt,
        width: 144,
      },
      {
        name: "New Contoso Collaboration for Conference Presentation Draft",
        linkProps: {
          href: "http://bing.com",
          target: "_blank",
        },
        previewImageSrc: "TestImages.documentPreviewTwo",
        iconSrc: TestImages.iconPpt,
        width: 144,
      },
      {
        name: "Spec Sheet for design",
        linkProps: {
          href: "http://bing.com",
          target: "_blank",
        },
        previewImageSrc: "TestImages.documentPreviewThree",
        iconSrc: TestImages.iconPpt,
        width: 144,
      },
      {
        name: "Contoso Marketing Presentation",
        linkProps: {
          href: "http://bing.com",
          target: "_blank",
        },
        previewImageSrc: "TestImages.documentPreview",
        iconSrc: TestImages.iconPpt,
        width: 144,
      },
    ],
  };

  const people: IDocumentCardActivityPerson[] = [
    { name: "Annie Lindqvist", profileImageSrc: TestImages.personaFemale },
    { name: "Roko Kolar", profileImageSrc: "", initials: "RK" },
    { name: "Aaron Reid", profileImageSrc: TestImages.personaMale },
    { name: "Christian Bergqvist", profileImageSrc: "", initials: "CB" },
  ];

  return (
    <section className="blogListPage">
      <Stack tokens={stackTokens}>
        <div className="blogList">
          <DocumentCard
            aria-label="Document Card with document preview. Revenue stream proposal fiscal year 2016 version 2.
    Created by Roko Kolar a few minutes ago"
            type={DocumentCardType.compact}
            onClickHref="http://bing.com"
          >
            <DocumentCardPreview
              previewImages={[previewProps.previewImages[0]]}
            />
            <DocumentCardDetails>
              <DocumentCardTitle
                title="Revenue stream proposal fiscal year 2016 version02.pptx"
                shouldTruncate
              />
              <DocumentCardActivity
                activity="Created a few minutes ago"
                people={[people[1]]}
              />
            </DocumentCardDetails>
          </DocumentCard>
          <DocumentCard
            aria-label="Document Card with document preview. Revenue stream proposal fiscal year 2016 version 2.
    Created by Roko Kolar a few minutes ago"
            type={DocumentCardType.compact}
            onClickHref="http://bing.com"
          >
            <DocumentCardPreview
              previewImages={[previewProps.previewImages[0]]}
            />
            <DocumentCardDetails>
              <DocumentCardTitle
                title="Revenue stream proposal fiscal year 2016 version02.pptx"
                shouldTruncate
              />
              <DocumentCardActivity
                activity="Created a few minutes ago"
                people={[people[1]]}
              />
            </DocumentCardDetails>
          </DocumentCard>
        </div>
      </Stack>
    </section>
  );
}
