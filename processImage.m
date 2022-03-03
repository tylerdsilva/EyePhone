function isValid = processImage(RGB)
    %RGB = imread('eyeopen.jpg');
    %RGB = imread('eyeclose.jpg');
    %RGB = imread('eyelash.jpg');

    if ndims(RGB) == 3
        I = rgb2gray(RGB);   
    else
        I = RGB;
    end

    BW = imbinarize(I,'adaptive','ForegroundPolarity','dark','Sensitivity',0.4);
    BW2 = imcomplement(BW);

    %figure
    %imshowpair(BW2,RGB,'montage')
    %title('Binary Version of Image')

    %hold on

    L = bwlabel(BW2);
    %vislabels(L)
    %hold on

    segmentSizes = regionprops(L,'Area');
    segments = [segmentSizes.Area];
    filteredSegments = find(segments > 900);

    %filter out segments < 900 pixels
    L(~ismember(L, filteredSegments)) = 0;

    %calculate region properties and analyze validity of segments
    %figure
    %imshow(L)
    %hold on

    regionProperties = regionprops(L, 'Circularity', 'Solidity', 'MinorAxisLength', 'MajorAxisLength', 'BoundingBox');

    isValid = false;
    for segmentIndex = filteredSegments
        circularity = regionProperties(segmentIndex).Circularity; 
        solidity = regionProperties(segmentIndex).Solidity; 
        minorAxisLength = regionProperties(segmentIndex).MinorAxisLength; 
        majorAxisLength = regionProperties(segmentIndex).MajorAxisLength; 
        %boundingBox = regionProperties(segmentIndex).BoundingBox; 

        %rectangle('Position', [boundingBox(1),boundingBox(2),boundingBox(3),boundingBox(4)],'EdgeColor','r','LineWidth',2);
        %hold on

        aspectRatio = min(minorAxisLength, majorAxisLength) / max(minorAxisLength, majorAxisLength);
        if(circularity > 0.15 && solidity > 0.5 && aspectRatio > 0.5)
            %disp(segmentIndex);
            isValid = true;
            %close all
            break
        end
    end
    %close all
end